module Inventoryable

    def self.included(klass)
        klass.extend(ClassMethods)
    end

    module ClassMethods
        def create(attributes)
            object = new(attributes)
            instances.push(object)
            return object
        end

        def instances
            @instances ||= []
        end
    end

    def stock_count
        @stock_count ||= 0
    end

    def stock_count=(number)
        @stock_count = number
    end

    def in_stock?
        stock_count > 0
    end
end

class Shirt
    include Inventoryable
    attr_accessor :attributes

    def initialize(attributes)
        @attributes = attributes
    end
end

class Pants
    include Inventoryable
    attr_accessor :attributes

    def initialize(attributes)
        @attributes = attributes
    end
end

class Accessory
    include Inventoryable
    attr_accessor :attributes

    def initialize(attributes)
        @attributes = attributes
    end
end

shirt1 = Shirt.create(name: "MTF", size: "L")
shirt2 = Shirt.create(name: "MTF", size: "M")

shirt1.stock_count = 10

puts "Shirt 1 stock count: %s" % shirt1.stock_count
puts "Shirt 2 stock count: %s" % shirt2.stock_count
