# frozen_string_literal: true

Rails.application.routes.draw do
  #  root 'static_pages#index'
  #  get '/', to: 'static_pages#index'

  root to: 'static_pages#home'
  get '/', to: 'static_pages#home'

  get 'demo' => 'static_pages#demo'
end
