class TrackersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    def index
        trackers = Tracker.all
        render json: trackers
    end

    def show
        tracker = find_tracker_log
        render json: tracker, status: :ok
    end

    def create
        new_tracker_log = Tracker.new(tracker_params)

        new_tracker_log.user = @current_user
        if new_tracker_log.save
            render json: new_tracker_log, status: :created
        else
            render json: {error: new_tracker_log.errors.full_messages}, status: 422
        end

    end

    def update
        tracker = find_tracker_log 
        student.update!(student_params)
        render json: student, status: :accepted
        end

    def destroy
        tracker_log = find_tracker_log
        tracker_log.destroy
        # head :no_content
        render json: {}
    end


    private#######################################################

    def find_tracker_log
        Tracker.find(params[:id])
    end

    def tracker_params
        params.permit(:exercise_name, :exercise_reps, :comment, :date, :exercise_id)
        # require(:tracker).
    end

    def render_not_found_response
        render json: {error: "Tracker Log not found"}, status: :not_found
    end

end
