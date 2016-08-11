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

        def report(title, items)
            puts title
            puts "-" *50
            items.each do |item|
                line = []
                line.push("Item: #{item.attributes[:name]}")
                line.push("Stock: #{item.stock_count}")
                if item.attributes.include?(:size)
                    line.push("Size: #{item.attributes[:size]}")
                end
                puts line.join("\t")
            end
            puts "-" *50
            puts "\n"
        end

        def in_stock_report
            title = "#{self.to_s} In Stock Report"
            reportable = instances.select{ |instance| instance.in_stock? }
            report(title, reportable)
        end

        def out_of_stock_report
            title = "#{self.to_s} Out of Stock Report"
            reportable = instances.select{ |instance| !instance.in_stock? }
            report(title, reportable)
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

module Treehouse
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
end

shirt1 = Treehouse::Shirt.create(name: "MTF", size: "L")
shirt1.stock_count = 10

shirt2 = Treehouse::Shirt.create(name: "MTF", size: "M")
shirt2.stock_count = 4

shirt2 = Treehouse::Shirt.create(name: "MTF", size: "S")
shirt2.stock_count = 0

shirt1 = Treehouse::Pants.create(name: "Frog Joggers", size: "XL")
shirt1.stock_count = 8

shirt2 = Treehouse::Pants.create(name: "Frog Joggers", size: "M")
shirt2.stock_count = 6

shirt1 = Treehouse::Accessory.create(name: "Bracelet", size: "L")
shirt1.stock_count = 1

shirt2 = Treehouse::Accessory.create(name: "Belt", size: "S")
shirt2.stock_count = 3

Treehouse::Shirt.in_stock_report
Treehouse::Shirt.out_of_stock_report
Treehouse::Pants.in_stock_report
Treehouse::Pants.out_of_stock_report
Treehouse::Accessory.in_stock_report
Treehouse::Accessory.out_of_stock_report
