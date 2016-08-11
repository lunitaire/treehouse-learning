module Fetcher
    def fetch(item)
        puts "I'll bring that #{item} right back!"
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
