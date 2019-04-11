json.body @message.body
json.image @message.image.url
json.name @message.user.name
json.group_id @message.group.id
json.user_id @message.user.id
json.created_at @message.created_at.strftime('%Y/%m/%d %H:%M:%S')
json.id @message.id
