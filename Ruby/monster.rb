class Monster
    attr_reader :name, :actions

    def initialize(name)
        @name = name
        @actions = {
            screams: 0,
            scares: 0
        }
    end

    def say(&block)
        print "#{name} says... "
        yield
    end

    def scream(&block)
        actions[:screams] += 1
        print "#{name} screams! "
        yield
    end

    def scare(&block)
        actions[:scares] += 1
        print "#{name} scares you! "
        yield
    end
end

monster = Monster.new("Fluffy")
monster.say { puts "Welcome to my home."}
monster.scream do
    puts "BOO!"
end

monster.scare do
    puts "Go away!"
end

puts monster.actions
