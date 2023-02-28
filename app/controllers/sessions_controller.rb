class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    
    # def show
    #     user_logged_in = User.find_by_id(session[:user_id])
    #     render json: user_logged_in
    # end

    def create
        user = User.find_by(username: params[:username])
        # debugger
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: ["Invalid Username or Password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
