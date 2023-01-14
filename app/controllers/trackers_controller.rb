class TrackersController < ApplicationController
    def index
        trackers = Tracker.all
        render json: trackers
    end

    def show
        tracker = Tracker.find_by(id: params[:id])
        render json: tracker, status: :ok
    end
end
