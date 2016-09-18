# blocks
3.times { puts "Shadowrun is addictive!" }

2.times do
  puts "Shadowrun"
  puts "Returns"
  true
end

# Notes on Blocks:
# You cannot use the return statement inside a block.
# You can only use implicit returns.

# block methods
def block_method
  puts "Elves, Dwarves, and Hackers, oh my!"
  yield
end

block_method do
  puts "From the streets of Hong Kong to Berlin to Seattle."
end

# block arguments
def get_name(prompt, &block)
  print prompt +": "
  name = gets.chomp
  yield name # allows name to be called outside of method
  name # returns name to variable
end

username = get_name("Enter your name") do |name|
  print "That's a cool name, #{name}!\n"
end

