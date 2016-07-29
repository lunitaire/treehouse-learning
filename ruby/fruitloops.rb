# Fruity Ruby Loops
# playing around with loops in ruby

# iteration with each

array = ["Red", "Blue", "Green", "Orange", "Violet", "Yellow"]

array.each do |item|
  puts "The current loop is #{item}."
end

 # hash iteration

fruitloops = { "color" => "red", "flavour" => "cherry" }

fruitloops.each do |key, value|
  puts "The #{key} is #{value}."
end

# times iteration

6.times do |item|
  puts "Fruity Ruby! #{item}"
end

# for loops

for item in 1..10 do
  puts "LOOP #{item}"
end

