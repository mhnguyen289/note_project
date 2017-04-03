class NotebookSerializer < ActiveModel::Serializer
  attributes :id, :notebook_title

  belongs_to :user
  has_many :notes
end
