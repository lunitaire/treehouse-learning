class Rolodex
  attr_reader :contacts

  def initialize
  	@contacts = []
  end

  def print_contact_list
  	contacts.each do |contact|
  	  puts contact.to_s('last_first')
  	end
  end
end