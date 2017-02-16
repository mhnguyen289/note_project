# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161129233530) do

  create_table "note_notebooks", force: :cascade do |t|
    t.integer "note_id"
    t.integer "notebook_id"
  end

  add_index "note_notebooks", ["note_id"], name: "index_note_notebooks_on_note_id"
  add_index "note_notebooks", ["notebook_id"], name: "index_note_notebooks_on_notebook_id"

  create_table "notebooks", force: :cascade do |t|
    t.string  "notebook_title"
    t.string  "notebook_content"
    t.integer "user_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string   "note_title"
    t.text     "note_content"
    t.integer  "user_id"
    t.integer  "notebook_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "notes", ["notebook_id"], name: "index_notes_on_notebook_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username"
    t.integer  "age"
    t.string   "hometown"
    t.string   "info"
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
