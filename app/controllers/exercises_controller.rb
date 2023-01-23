class ExercisesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
skip_before_action :authorize
    
    def index
        exercises = Exercise.all
        render json: exercises
    end

    # def render_steps
    #     exercise_steps = Exercise.self.render
    # end

    def show
        exercise = find_exercise
        render json: exercise
    end

    private ####################################################################
    def find_exercise
        Exercise.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "Exercise Not Found"}, status: :not_found
    end
    
end
