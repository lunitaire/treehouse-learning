require "./todo_item"

class TodoList
    attr_reader :name, :todo_items

    def initialize(name)
        @name = name
        @todo_items = []
    end
end

todo_list = TodoList.new("Art Projects")
todo_item = TodoItem.new("Oil Painting")

puts todo_item
