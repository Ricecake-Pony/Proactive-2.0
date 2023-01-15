class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :post_validation_error

    private ##################################################################
    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
    end

    def post_validation_error(errors)
        render json: {errors: errors.record.errors.full_messages}, status: :unprocessable_entity
    end
    
end
