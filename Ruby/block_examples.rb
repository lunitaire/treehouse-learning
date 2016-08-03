3.times { puts "Shadowrun is addictive!" }

2.times do
  puts "Shadowrun"
  puts "Returns"
  true
end

# You cannot use the return statement inside a block.
# You can only use implicit returns.

def block_method
  puts "Elves, Dwarves, and Hackers, oh my!"
  yield
end

block_method do
  puts "From the streets of Hong Kong to Berlin to Seattle."
end
