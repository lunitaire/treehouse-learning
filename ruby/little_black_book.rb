# the little black book of numbers

contact_list = []

def ask (question, kind="string")
  print question + " "
  answer = gets.chomp
  answer = answer.to_i if kind == "number"
  return answer
end

def add_contact
  contact = {"name" => "", "phone_number" => []}
  contact["name"] = ask("What is the person's name?")
  answer = ""
  while answer != "n"
    answer = ask("Do you want to add a phone number? (y/n)")
    if answer == "y"
      phone = ask("Enter a phone number: ")
      contact["phone_numbers"].push(phone) 
    end
  end
  return contact
end

answer = ""
while answer != "n"
  contact_list.push(add_contact())
  answer = ask("Add another? (y/n)")
end


#answer = ask("What is your name?")
#puts answer

