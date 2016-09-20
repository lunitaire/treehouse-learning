# loop interrupting cow
phrases = ["Knock. ","Knock. \n","Who's ","there? \n", "Interrupting ", "cow. \n", "Interrupting ", "cow ", "who? \n"]
numphrase = 0

# add in start screen functionality.
# allow start, instructions, and exit.
# at end of joke loop go back to start screen.

print "Let's hear a joke! \n"
print "You know how to stop me if you've heard this one before. \n"

def slow_print(string)
  string.each_char { |c| print "#{c}"; sleep(0.25)}
  # Need to figure out a way to print all if any input happens when slow printing.
end

loop do
  slow_print(phrases[numphrase])
  answer = gets.chomp.downcase
  if (answer == "moo") && (numphrase != 8)
    print "LOL. \n"
    break
  elsif (answer == "moo") && (numphrase == 8)
    print "Poor timing. \n"
    numphrase = 0
  elsif (answer != "moo") && (numphrase == 8)
    numphrase = 0
  else
    numphrase += 1
  end
end
