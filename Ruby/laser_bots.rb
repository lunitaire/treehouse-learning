include Comparable

module LaserBots
    module Console
        class Command
        end
    end

    module World
        class Player
            attr_accessor :name, :score

            def initialize(name, score)
                @name = name
                @score = name
            end

            def <=>(other_player)
                score <=> other_player.score
            end
        end

        class Robot
            attr_reader :name
            def initialize(name)
                @name = name
            end

            def target_player(name)
                Player.new(name)
            end
        end
    end
end

player1 = LaserBots::World::Player.new("Jason", 100)
player2 = LaserBots::World::Player.new("Deliah", 80)

puts "player1 > player2: %s" % (player1 > player2)
puts "player1 < player2: %s" % (player1 < player2)
