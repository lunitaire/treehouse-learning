class TodoList
    attr_reader :name, :todo_items

    def initialize(name)
        @name = name
        @todo_items = []
    end
end
