Rails.application.routes.draw do
  resources :steps
  resources :trackers
  resources :exercises
  resources :users


  get "/me", to: "users#show"
  post "/signup", to: "users#login"

  # get "/user_logged_in", to: "sessions#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
