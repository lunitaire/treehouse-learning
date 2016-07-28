#Greeting the user.
creator = "Atrian"

print "Fair tidings!\nWho goes there? "
name = gets.chomp

def helloWorld
  return "Hello #{name}!"
end

if (creator == name)
  puts "Hello, Atrian!"
  puts "Great to see you again!"
else 
  puts "Hello #{name}!"
  puts "Nice to meet you!" 
end
