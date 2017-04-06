class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :note_id
  has_one :note
end
