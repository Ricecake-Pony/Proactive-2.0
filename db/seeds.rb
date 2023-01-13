puts "Clearing Database"
User.destroy_all
Exercise.destroy_all
Tracker.destroy_all
puts "Database Cleared"

puts "Creating Users"
User.create(username: "Pablo", password: "1", full_name:"Bad Pablo!")
User.create(username: "Maria", password: "1", full_name:"Wack Maria!")
puts "Users Created"

puts "Finding Exercises"
Exercise.create(title: "Tricep Pullover", steps: "Bring one arm across body and pull from wrist towards your shoulder", image: "https://media4.giphy.com/media/EMxvBrMaMoGbK/giphy.gif?cid=ecf05e47cmx3fs1mppb7tr2ik5n8uxln2zea4pytuupbakm5&rid=giphy.gif&ct=g" ,duration: "15-30 secs twice")
Exercise.create(title: "Hamstring Stretch", steps: "Bring one arm touch your toes if possible", image: "https://media0.giphy.com/media/Q86hAbMVJ4uTWidqFb/200w.webp?cid=ecf05e479pmb7kap4kxtiozq3cbiykcolutnef3b2vn5o0ho&rid=200w.webp&ct=g" ,duration: "15-30 secs twice")
puts "Exercises Created"

puts "Tracker"
Tracker