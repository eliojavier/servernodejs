module.exports = function(mongoose) {
    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        name : String,
        birthday : Date,
        isAdmin : Boolean
    });

    UserSchema.methods.age = function() {
        return ~~((Date.now() - this.birthday) / (31557600000));
    };

    return mongoose.model('User', UserSchema);
};