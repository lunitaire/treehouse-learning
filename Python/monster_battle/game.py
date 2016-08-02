from character import Character
from monster import Dragon
from monster import Goblin
from monster import Troll


class Game:
    #setup step
    def setup(self):
        self.player = Character()
        self.monsters = [
            Goblin(),
            Troll(),
            Dragon()
        ]
        self.monster = self.get_next_monster()

    def get_next_monster(self):
        try:
            return self.monsters.pop(0)
        except IndexError:
            return None

    # repeat the following
        # monster turn
        def monster_turn(self):
            # Check to see if the monster attacks
            if self.monster.attack():
                print("{} is attacking".format(self.monster))

                if input("Dodge? Y/N ").lower() == 'y':
                    if self.player.dodge():
                        print("You dodged the attack!")
                    else:
                        print("You got hit anyway.")
                        self.player.hit_points -= 1
                else:
                    print("{}. hit you for 1 point!".format(self.monster))
                    # Should probably make a hit method
                    self.player.hit_points - = 1
            else:
                # If the monster isn't attacking, tell that to the player too
                print("{} isn't attacking this turn.".format(self.monster))

        # player turn
        def player_turn(self):
            # Let the player attack, rest, or quit
            # If they attack:
                # See if the attack is successful
                    # If so, see if the monster dodges
                        # If dodged, print that
                        # If not dodged, subtract the right num of hit points from the monster
                    # If not a good attack, tell the player
                # If they rest:
                    # Call the player.rest() method
                # If they quit, exit the game
                # If they pick anything else, re-run this method

        # check to see if monster or player are dead
        def cleanup(self):
            # If the monster has no more hit points:
                # up the player's experience
                # print a message
                # get a new monster

        def __init__(self):
            self.setup()

            while self.player.hit_points and (self.monster or self.monsters):
                print(self.player)
                self.monster_turn()
                self.player_turn()
                self.cleanup()

            if self.player.hit_points:
                print("You win!")
            elif self.monsters or self.monster:
                print("You lose!")




