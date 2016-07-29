# loop interrupting cow
phrases = ["Knock. ","Knock. \n","Who's ","there? \n", "Interrupting ", "cow. \n", "Interrupting ", "cow ", "who? \n"]
numphrase = 0

print "Let's hear a joke! \n"
print "You know how to stop me if you've heard this one before. \n"

loop do 
  print phrases[numphrase]
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
