class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note_title, :note_content, :notebook_id
  
  belongs_to :notebook
  belongs_to :user
  has_many :comments
end
