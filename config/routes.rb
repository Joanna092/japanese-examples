# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#home'
  get '/', to: 'static_pages#home'

  get 'search' => 'static_pages#search'
  get 'sentence_added' => 'static_pages#sentence_added'
  get 'examples' => 'static_pages#examples'
  get 'new_example' => 'static_pages#new_examples'
  get 'profile' => 'static_pages#profile'
  get 'login' => 'static_pages#login'
  get 'signup' => 'static_pages#signup'
  get 'about' => 'static_pages#about'
  get 'contact' => 'static_pages#contact'
end
