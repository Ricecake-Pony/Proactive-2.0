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
        new_tracker_log = Tracker.create!(tracker_params)
        render json: new_tracker_log, status: :created
    end

    def update
        tracker = find_tracker_log 
        student.update!(student_params)
        render json: student, status: :accepted
        end

    def destroy
        tracker_log = find_tracker_log
        tracker_log.destroy
        head :no_content
    end


    private#######################################################

    def find_tracker_log
        Tracker.find(params[:id])
    end

    def tracker_params
        params.permit(:exercise_name, :exercise_reps, :comment, :date, :exercise_id, :user_id)
        # require(:tracker).
    end

    def render_not_found_response
        render json: {error: "Tracker Log not found"}, status: :not_found
    end

end
