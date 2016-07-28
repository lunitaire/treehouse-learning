#Greeting the user.
creator = "Atrian"

def get_name()
  print "Fair tidings!\nWho goes there? "
  return name = gets.chomp
end

def helloWorld(name, creator)
  if (name == creator)
    puts "Hello, Atrian!"
    puts "Great to see you again!"
  else 
    puts "Hello #{name}!"
    puts "Nice to meet you!" 
  end
end

name = get_name()
helloWorld(name, creator)
