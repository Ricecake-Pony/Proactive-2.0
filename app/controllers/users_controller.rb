class UsersController < ApplicationController
    skip_before_action :authorize

    def index
        users = User.all
        render json: users
    end
    
    # def user_posts
    #     render json: Post.find(session[:user_id]).trackers
    # end

    def login
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json:user
        else
            render json: {error: user.errors.full_message}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    private
        def user_params
            params.permit(:username, :password, :password_confirmation)
        end
end
