class PostsController < ApplicationController

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    authenticate_user!
    @post = Post.find(params[:id])
    render json: @post
  end
end
