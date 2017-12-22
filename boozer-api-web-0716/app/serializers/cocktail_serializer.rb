class CocktailSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :instructions
  has_many :proportions
end
