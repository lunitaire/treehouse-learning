# the little black book of numbers

contact_list = []

def ask (question, kind="string")
  print question + " "
  answer = gets.chomp
  answer = answer.to_i if kind == "number"
  return answer
end

def add_contact
  contact = {:name => "", :phone_numbers => []} #Fixed a typo in the declaration, also
                                                #Ruby hashes should use symbols, not strings for keys
                                                #Symbols are only stored once, conserving memory and increasing speed
                                                #While strings must be stored continously. This also fixes the key as immutable
                                                #or unchanging, which is obviously needed for hashes to behave reliably
  contact[:name] = ask("What is the person's name?")
  answer = ""
  while answer != "n"
    answer = ask("Do you want to add a phone number? (y/n)")
    if answer == "y"
      phone = ask("Enter a phone number: ")
      contact[:phone_numbers].push(phone)
    end
  end
  return contact
end

answer = ""
while answer != "n"
  contact_list.push(add_contact())
  answer = ask("Add another? (y/n)")
end

puts "---"

contact_list.each do |contact|
  puts "Name: #{contact[:name]}"
  if contact[:phone_numbers].size > 0
    contact[:phone_numbers].each do |phone_number|
      puts "Phone: #{phone_number}"
    end
  end
  puts "-----\n"
end


