# the little black book of numbers

contact_list = []

def ask (question, kind="string")
  print question + " "
  answer = gets.chomp
  answer = answer.to_i if kind == "number"
  return answer
end
