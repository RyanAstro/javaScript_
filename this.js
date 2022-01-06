const pessoa = {
    firtName: "andre",
    lastName: "soares",
    id: 1,
    fullName: function() {
        return this.firtName + " " + this.lastName;
    },
        getId: function() {
            return this.id;
        }
    };

    pessoa.fullName();

    pessoa.getId();

