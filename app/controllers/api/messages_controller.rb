class Api::MessagesController < ApplicationController
  def index
    @group = Message.find(params[:id]).group
    respond_to do |format|
      format.html
      format.json { @new_messages = @group.messages.where('id > ?', params[:id]) }
      # json形式でアクセスがあった場合は、params[:message][:id]よりも大きいidがないかMessageから検索して、@new_messageに代入する
    end
  end
end 