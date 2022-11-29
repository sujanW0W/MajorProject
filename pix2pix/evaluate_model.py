from keras.models import load_model
from tensorflow.keras.optimizers import Adam


model = load_model('models/places/model_049200.h5')
model.compile(loss=['binary_crossentropy', 'mae'], optimizer=Adam(lr=0.0002, beta_1=0.5), loss_weights=[1,100])
# model.summary()
model.evaluate()
