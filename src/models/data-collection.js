"use strict";

class DataCollection {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    try {
      if (id) {
        return await this.model.findOne({ id });
      } else {
        return await this.model.findAll({});
      }
    } catch (error) {
      console.error(error)
    }
  }

  async create(record) {
    try {
      return await this.model.create(record);
    } catch (error) {
      console.error(error);
    }
  }

  async update(id, data) {
    try {
      let currentRecord = await this.model.findOne({ where: { id } });
      let updatedRecord = await currentRecord.update(data);
      return updatedRecord;
    } catch (error) {}
  }

  async delete(id) {
    if (!id) {
      throw new Error("Invalid id");
    }
    try {
      let deletedRecord = await this.model.destroy({ where: { id } });
      return deletedRecord;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = DataCollection;