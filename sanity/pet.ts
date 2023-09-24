
export default {
    name: 'pet',
    type: 'document',
    title: 'Pet',
    options: {
        hotspot: true // <-- Defaults to false
      },
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
          name: 'Image',
          type: 'image',
          title: 'Image',
        },
        {
            name: 'Date',
            type: 'date',
            title: 'Date',
        },
        {
            name: 'dropdownField',
            type: 'string',
            title: 'Dropdown Field',
            options: {
              list: [
                { title: 'Option 1', value: 'option1' },
                { title: 'Option 2', value: 'option2' },
                { title: 'Option 3', value: 'option3' },
              ],
            }
        } 
      ]
}