# Requires Python3
import random

CELLS = [(0, 0), (0, 1), (0, 2),
        (1, 0), (1, 1), (1, 2),
        (2, 0), (2, 1), (2, 2)]


def get_locations():
    monster = random.choice(CELLS)
    door = random.choice(CELLS)
    start = random.choice(CELLS)

    # if monster, door, or start are the same, do it again
    if monster == door or monster == start or door == start:
        return get_locations

    return monster, door, start


def move_player(player, move):
    # Get the player's current location
    x, y = player

    # If move is LEFT, y - 1
    if move == 'LEFT':
        y -=1
    # If move is RIGHT, y + 1
    if move == 'RIGHT':
        y +=1
    # If move is UP, x - 1
    if move == 'UP':
        x -=1
    # If move is DOWN, x + 1
    if move == 'DOWN':
        x =1
    return x, y


def get_moves(player):
    moves = ['LEFT', 'RIGHT', 'UP', 'DOWN']
    # player = (x,y)
    # if player's y is 0, remove LEFT
    if player[1] == 0:
        moves.remove('LEFT')
    # if player's x is 0, remove UP
    if player[1] == 2:
        moves.remove('RIGHT')
    # if player's y is 2, remove RIGHT
    if player[0] == 0:
        moves.remove('UP')
    # if player's x is 2, remove DOWN
    if player[0] == 2:
        moves.remove('DOWN')
    return moves

monster, door, player = get_locations()

while True:
    moves = get_moves(player)

    print("Welcome to the dungeon!")
    print("You're currently in room {}".format(player))
    print("You can move {}".format(moves))
    print("Enter QUIT to quit")

    move = input("> ")
    move = move.upper()

    if move == 'QUIT':
        break
    
    # If it's a good move, change the player's position
    if move in moves:
        player = move_player(player, move)
    # If it's a bad move, don't change anything
    else:
        print("** Walls are hard; stop walking into them! **")
        continue
    # If the new player position is the door, they win!
    if player == door:
        print ("You escaped!")
        break
    # If the new player position is the monster, they lose!
    elif player == monster:
        print ("You were eaten by the grue!")
        break
    # Otherwise, continue
