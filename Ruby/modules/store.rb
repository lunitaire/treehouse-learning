module Inventoryable

    def self.included(klass)
        klass.extend(ClassMethods)
        klass.extend(Enumerable)
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

        def each(&block)
            instances.each(&block)
        end

        def in_stock_report
            puts "#{self.to_s} In Stock Report"
            reportable = instances.select{ |instance| instance.in_stock? }
            reportable.each do |item|
                line = []
                line.push("Item #{item.attributes[:name]}")
                line.push("Stock: #{item.stock_count}")
                if item.attributes.include?(:size)
                    line.push("Size: #{item.attributes[:size]}")
                end
                puts line.join("\t")
            end
            puts "\n"
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
shirt1.stock_count = 10

shirt2 = Shirt.create(name: "MTF", size: "M")
shirt2.stock_count = 4

shirt1 = Pants.create(name: "Frog Joggers", size: "XL")
shirt1.stock_count = 8

shirt2 = Pants.create(name: "Frog Joggers", size: "M")
shirt2.stock_count = 6

shirt1 = Accessory.create(name: "Bracelet", size: "L")
shirt1.stock_count = 1

shirt2 = Accessory.create(name: "Belt", size: "S")
shirt2.stock_count = 3

Shirt.in_stock_report
