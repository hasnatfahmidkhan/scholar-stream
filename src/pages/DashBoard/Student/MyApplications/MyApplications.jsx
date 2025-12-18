// src/pages/Dashboard/MyApplications/MyApplications.jsx
import { useState, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  FileText,
  University,
  MapPin,
  MessageSquare,
  DollarSign,
  Info,
  Edit,
  Trash2,
  Star,
  CreditCard,
  Eye,
  Loader2,
  X,
  AlertTriangle,
} from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Spinner from "../../../../components/Spinner/Spinner";

const MyApplications = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // State
  const [selectedApp, setSelectedApp] = useState(null);
  const [rating, setRating] = useState(5);
  const [deleteId, setDeleteId] = useState(null);

  // Modals Refs
  const detailsModalRef = useRef(null);
  const reviewModalRef = useRef(null);
  const deleteModalRef = useRef(null);

  // React Hook Form for Review
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch Applications
  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["my-applications", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/applications/byUser?email=${user?.email}`
      );
      return data;
    },
  });

  // Delete Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosSecure.delete(`/applications/${id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["my-applications"]);
      toast.success("Application deleted successfully");
      deleteModalRef.current?.close();
    },
    onError: () => {
      toast.error("Failed to delete application");
    },
  });

  // Review Mutation
  const reviewMutation = useMutation({
    mutationFn: async (reviewData) => {
      const { data } = await axiosSecure.post("/reviews", reviewData);
      return data;
    },
    onSuccess: () => {
      toast.success("Review submitted successfully");
      reviewModalRef.current?.close();
      reset();
    },
    onError: () => {
      toast.error("Failed to submit review");
    },
  });

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    deleteModalRef.current?.showModal();
  };

  const confirmDelete = () => {
    if (deleteId) deleteMutation.mutate(deleteId);
  };

  const handleReviewClick = (app) => {
    setSelectedApp(app);
    reviewModalRef.current?.showModal();
  };

  const onReviewSubmit = (data) => {
    const reviewData = {
      scholarshipId: selectedApp.scholarshipId,
      scholarshipName: selectedApp.scholarshipName,
      universityName: selectedApp.universityName,
      universityId: selectedApp.universityId,
      userName: user.displayName,
      userImage: user.photoURL,
      userEmail: user.email,
      rating: parseInt(rating),
      comment: data.comment,
      reviewDate: new Date().toISOString(),
    };
    reviewMutation.mutate(reviewData);
  };

  const handlePayment = (app) => {
    // Navigate to payment page with application details
    navigate(`/payment/${app._id}`, { state: { application: app } });
  };

  // Status Badge Helper
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <span className="badge badge-warning">Pending</span>;
      case "processing":
        return <span className="badge badge-info">Processing</span>;
      case "completed":
        return (
          <span className="badge badge-success text-white">Completed</span>
        );
      case "rejected":
        return <span className="badge badge-error text-white">Rejected</span>;
      default:
        return <span className="badge badge-ghost">{status}</span>;
    }
  };

  // Loading State
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="text-primary" />
          My Applications
        </h1>
        <p className="text-gray-500 mt-1">
          Track and manage your scholarship applications ({applications.length})
        </p>
      </div>

      {/* Applications Table */}
      <div className="card bg-base-100 border border-gray-200 overflow-hidden">
        {applications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <FileText className="size-16 mb-4 opacity-20" />
            <p className="text-lg font-medium">No applications found</p>
            <Link
              to="/all-scholarships"
              className="btn btn-primary btn-sm mt-4"
            >
              Browse Scholarships
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* Head */}
              <thead className="bg-base-200">
                <tr>
                  <th>University</th>
                  <th>Category</th>
                  <th>Fees</th>
                  <th>Status</th>
                  <th>Feedback</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {applications.map((app) => (
                  <tr key={app._id} className="hover">
                    {/* University Info */}
                    <td>
                      <div>
                        <div className="font-bold flex items-center gap-2">
                          <University className="size-4 text-primary" />
                          {app.universityName}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="size-3" />
                          {app.universityCity}, {app.universityCountry}
                        </div>
                      </div>
                    </td>

                    {/* Subject Category */}
                    <td>
                      <div className="flex flex-col gap-1.5">
                        <div className="badge badge-ghost text-xs">
                          {app.subjectCategory}
                        </div>
                        <div className="text-xs badge badge-soft">
                          {app.degree}
                        </div>
                      </div>
                    </td>

                    {/* Application Fees */}
                    <td>
                      <div className="flex items-center gap-1 font-medium">
                        <DollarSign className="size-3" />
                        {app.applicationFees}
                      </div>
                    </td>

                    {/* Status */}
                    <td>{getStatusBadge(app.applicationStatus)}</td>

                    {/* Feedback (if any) */}
                    <td>
                      {app.feedback ? (
                        <div
                          className="tooltip tooltip-left"
                          data-tip={app.feedback}
                        >
                          <button className="btn btn-ghost btn-xs text-info">
                            <MessageSquare className="size-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">
                          No feedback
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td>
                      <div className="flex items-center justify-center gap-2">
                        {/* Details Button */}
                        <Link
                          to={`/scholarship/${app.scholarshipId}`}
                          className="btn btn-square btn-sm btn-ghost text-info"
                          title="View Details"
                        >
                          <Eye className="size-4" />
                        </Link>

                        {/* Edit Button (Only if pending) */}
                        {app.applicationStatus === "pending" && (
                          <Link
                            to={`/dashboard/edit-application/${app._id}`}
                            className="btn btn-square btn-sm btn-ghost text-warning"
                            title="Edit Application"
                          >
                            <Edit className="size-4" />
                          </Link>
                        )}

                        {/* Pay Button (Only if pending & unpaid) */}
                        {app.applicationStatus === "pending" &&
                          app.paymentStatus !== "paid" && (
                            <button
                              onClick={() => handlePayment(app)}
                              className="btn btn-square btn-sm btn-ghost text-success"
                              title="Pay Application Fees"
                            >
                              <CreditCard className="size-4" />
                            </button>
                          )}

                        {/* Delete Button (Only if pending) */}
                        {app.applicationStatus === "pending" && (
                          <button
                            onClick={() => handleDeleteClick(app._id)}
                            className="btn btn-square btn-sm btn-ghost text-error"
                            title="Cancel Application"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        )}

                        {/* Add Review Button (Only if completed) */}
                        {app.applicationStatus === "completed" && (
                          <button
                            onClick={() => handleReviewClick(app)}
                            className="btn btn-square btn-sm btn-ghost text-warning"
                            title="Add Review"
                          >
                            <Star className="size-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Review Modal */}
      <dialog
        ref={reviewModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
            <Star className="text-warning fill-warning" />
            Rate Your Experience
          </h3>

          <form onSubmit={handleSubmit(onReviewSubmit)} className="space-y-4">
            {/* University Name Display */}
            <div className="text-center mb-4">
              <p className="text-gray-500 text-sm">Reviewing</p>
              <h4 className="font-bold text-lg">
                {selectedApp?.universityName}
              </h4>
            </div>

            {/* Rating Input */}
            <div className="flex flex-col items-center gap-2">
              <span className="label-text font-medium">Rating</span>
              <div className="rating rating-lg">
                {[1, 2, 3, 4, 5].map((star) => (
                  <input
                    key={star}
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-warning"
                    checked={rating === star}
                    onChange={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            {/* Comment Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Your Review</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 focus:outline-none focus:border-primary"
                placeholder="Share your experience with this university and scholarship process..."
                {...register("comment", { required: "Review is required" })}
              ></textarea>
              {errors.comment && (
                <span className="text-error text-xs mt-1">
                  {errors.comment.message}
                </span>
              )}
            </div>

            <div className="modal-action">
              <button
                type="button"
                onClick={() => reviewModalRef.current?.close()}
                className="btn btn-ghost"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={reviewMutation.isPending}
              >
                {reviewMutation.isPending ? (
                  <Loader2 className="animate-spin size-4" />
                ) : (
                  "Submit Review"
                )}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* 3. Delete Confirmation Modal */}
      <dialog
        ref={deleteModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center mb-4">
              <AlertTriangle className="size-8 text-error" />
            </div>
            <h3 className="font-bold text-lg">Cancel Application?</h3>
            <p className="py-4 text-gray-500 text-sm">
              Are you sure you want to cancel this application? This action
              cannot be undone.
            </p>
          </div>

          <div className="modal-action justify-center gap-3">
            <form method="dialog">
              <button className="btn btn-ghost">No, Keep it</button>
            </form>
            <button
              onClick={confirmDelete}
              className="btn btn-error text-white gap-2"
              disabled={deleteMutation.isPending}
            >
              {deleteMutation.isPending ? (
                <Loader2 className="animate-spin size-4" />
              ) : (
                <Trash2 className="size-4" />
              )}
              Yes, Cancel it
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default MyApplications;
