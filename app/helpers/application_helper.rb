module ApplicationHelper
	
	def notenote
		@notebooks = Notebook.all
 			@note_find = @notebooks.map do |notebook| 
            notebook.title
          end
          @notenote = @note_find.uniq
          puts @notenote
      end
   end

