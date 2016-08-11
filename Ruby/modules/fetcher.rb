module Fetcher
    def self.included(klass)
        puts "A #{klass} watches you throw."
        attr_accessor :fetch_count
    end
    def fetch(item)
        @fetch_count ||=0
        @fetch_count += 1
        puts "[#{@name}]: I'll bring that #{item} right back!"
    end
end

class Dog
    include Fetcher
    def initialize(name)
        @name = name
    end
end

dog = Dog.new("Ruckus")
dog.fetch("WiFi Hotspot")
dog.fetch("red ball")

