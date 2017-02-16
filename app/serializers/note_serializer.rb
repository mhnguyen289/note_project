class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note_title, :note_content
  
  belongs_to :notebook
  belongs_to :user
end
