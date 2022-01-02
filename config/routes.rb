# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#home'
  get '/', to: 'static_pages#home'

  get 'search' => 'static_pages#search'
end
