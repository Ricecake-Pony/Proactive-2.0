class StepsController < ApplicationController
    skip_before_action :authorize, only: [:index]
    def index
        steps = Step.all
        render json: steps    
    end
end
