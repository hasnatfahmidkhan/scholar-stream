import { useForm } from "react-hook-form";
import Container from "../../../components/Container/Container";
import { Link } from "react-router";
import SocialBtn from "../../../components/SocialBtn";
import Lottie from "lottie-react";
import signupAnimation from "../../../assets/animations/Login.json";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container
      className={"min-h-[calc(100vh-72px)] flex items-center justify-center"}
    >
      <div className="card bg-base-100 w-full max-w-4xl shrink-0 shadow-2xl">
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lottie Animation Section */}
            <div className="hidden lg:flex justify-center items-center">
              <Lottie
                animationData={signupAnimation}
                loop={true}
                autoplay={true}
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </div>

            {/* Form Section */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center text-2xl font-semibold mb-3">
                  Sign Up
                </h3>

                {/* Mobile Lottie - Shows only on small screens */}
                <div className="lg:hidden flex justify-center mb-4">
                  <Lottie
                    animationData={signupAnimation}
                    loop={true}
                    autoplay={true}
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>

                <fieldset className="fieldset space-y-2">
                  {/* Name Field */}
                  <div>
                    <label className="custom-label">Name</label>
                    <input
                      type="text"
                      className={`input focus:border-primary focus:outline-none w-full ${
                        errors.name ? "input-error" : ""
                      }`}
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                        maxLength: {
                          value: 50,
                          message: "Name must not exceed 50 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="text-error text-sm">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Image Field */}
                  <div>
                    <label className="custom-label">Image</label>
                    <input
                      type="file"
                      className={`file-input focus:border-primary focus:outline-none w-full ${
                        errors.image ? "file-input-error" : ""
                      }`}
                      accept="image/*"
                      {...register("image", {
                        required: "Profile image is required",
                        validate: {
                          fileSelected: (files) =>
                            files?.length > 0 || "Please select an image",
                          fileSize: (files) =>
                            !files[0] ||
                            files[0].size <= 2 * 1024 * 1024 ||
                            "Image size must be less than 2MB",
                          fileType: (files) =>
                            !files[0] ||
                            [
                              "image/jpeg",
                              "image/png",
                              "image/gif",
                              "image/webp",
                            ].includes(files[0].type) ||
                            "Only JPEG, PNG, GIF, and WebP images are allowed",
                        },
                      })}
                    />
                    {errors.image && (
                      <span className="text-error text-sm">
                        {errors.image.message}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="custom-label">Email</label>
                    <input
                      type="email"
                      className={`input focus:border-primary focus:outline-none w-full ${
                        errors.email ? "input-error" : ""
                      }`}
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-error text-sm">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <label className="custom-label">Password</label>
                    <input
                      type="password"
                      className={`input focus:border-primary focus:outline-none w-full ${
                        errors.password ? "input-error" : ""
                      }`}
                      placeholder="Password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 8 characters",
                        },
                        validate: {
                          hasUppercase: (value) =>
                            /[A-Z]/.test(value) ||
                            "Password must contain at least one uppercase letter",
                          hasLowercase: (value) =>
                            /[a-z]/.test(value) ||
                            "Password must contain at least one lowercase letter",
                          hasNumber: (value) =>
                            /\d/.test(value) ||
                            "Password must contain at least one number",
                          hasSpecialChar: (value) =>
                            /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                            "Password must contain at least one special character",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-error text-sm">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary mt-2 w-full">
                    Sign Up
                  </button>
                </fieldset>
              </form>

              <div className="mt-4">
                <p className="mb-4 text-center">
                  Already have an account?{" "}
                  <Link
                    to={"/signIn"}
                    className="hover:underline text-primary font-medium"
                  >
                    Sign In
                  </Link>
                </p>
                <SocialBtn onClick={() => "lkj"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
