class Monster
    attr_reader :name, :actions

    def initialize(name)
        @name = name
        @actions = {
            screams: 0,
            scares: 0,
            tricks: 0,
            treats: 0
        }
    end

    def print_scoreboard
        puts "-"*40
        puts "#{name}'s Scoreboard"
        puts "-"*40
        puts "- Tricks: #{actions[:tricks]}"
        puts "- Treats: #{actions[:treats]}"
        puts "- Screams: #{actions[:screams]}"
        puts "- Scares: #{actions[:scares]}"
        puts "-"*40
    end

    def say(&block)
        print "#{name} says... "
        yield
    end

    def trick(&block)
        actions[:tricks] += 1
        print "#{name} tricks you! "
        yield
    end

    def treat(&block)
        actions[:treats] += 1
        print "#{name} gives you a treat! "
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
monster.say { puts "What are you doing in my house?"}
monster.scream do
    puts "BOO!"
end

monster.scare do
    puts "Go away!"
end

monster.trick do
    puts "Look over there!"
end

monster.treat do
    puts "Fine, have it your way."
end

puts "\n"
monster.print_scoreboard
